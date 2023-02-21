using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Business.Contracts;

public interface ICostService
{
    Task<OperationResult<IEnumerable<CostDto>>> GetCosts();
    Task<OperationResult<bool>> UpdateCosts(IEnumerable<CostDto> costs);
}