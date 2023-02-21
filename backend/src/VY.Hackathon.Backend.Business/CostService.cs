using VY.Hackathon.Backend.Business.Contracts;
using VY.Hackathon.Backend.Domain.Contracts.Repository;
using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Entities;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Business;

public class CostService : ICostService
{
    private readonly ICostRepository _costRepository;

    public CostService(ICostRepository costRepository)
    {
        _costRepository = costRepository;
    }
    
    public async Task<OperationResult<IEnumerable<CostDto>>> GetCosts()
    {
        var costRepositoryResult = await _costRepository.GetAll();

        if (!costRepositoryResult.IsSuccessful)
        {
            return new OperationResult<IEnumerable<CostDto>>(costRepositoryResult.Errors);
        }

        var mapped = costRepositoryResult.Result.Select(x => new CostDto
        {
            EmployeeType = x.EmployeeType,
            FullTimeCost = x.FullTimeCost,
            PartTimeCost = x.PartTimeCost
        });
        
        return new OperationResult<IEnumerable<CostDto>>(mapped);
    }

    public async Task<OperationResult<bool>> UpdateCosts(IEnumerable<CostDto> costs)
    {
        return await _costRepository.UpdateList(costs.Select(x => new Cost
        {
            EmployeeType = x.EmployeeType,
            FullTimeCost = x.FullTimeCost,
            PartTimeCost = x.PartTimeCost
        }));
    }
}