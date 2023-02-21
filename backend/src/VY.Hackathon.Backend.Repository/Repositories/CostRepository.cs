using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using VY.Hackathon.Backend.Domain.Contracts.Repository;
using VY.Hackathon.Backend.Domain.Entities;
using VY.Hackathon.Backend.Domain.Poco;
using VY.Hackathon.Backend.Domain.Types;

namespace VY.Hackathon.Backend.Repository.Repositories;

public class CostRepository : ICostRepository
{
    private readonly AppDbContext _dbContext;
    private readonly ILogger<CostRepository> _logger;

    public CostRepository(AppDbContext dbContext, ILogger<CostRepository> logger)
    {
        _dbContext = dbContext;
        _logger = logger;
    }
    
    public async Task<OperationResult<IEnumerable<Cost>>> GetAll()
    {
        var costs = await _dbContext.Costs.ToListAsync();
        
        _logger.LogInformation("Test info");

        return (costs?.Count ?? 0) == 0 
            ? new OperationResult<IEnumerable<Cost>>(new ErrorResult("Not found", ErrorType.NotFound)) 
            : new OperationResult<IEnumerable<Cost>>(costs);
    }

    public async Task<OperationResult<Cost>> GetOne(Guid id)
    {
        var cost = await _dbContext.Costs.FindAsync(id);

        return cost == null 
            ? new OperationResult<Cost>(new ErrorResult("Not found", ErrorType.NotFound)) 
            : new OperationResult<Cost>(cost);
    }
    
    public async Task<OperationResult<bool>> UpdateList(IEnumerable<Cost> items)
    {
        foreach (var item in items)
        {
            var founded = await _dbContext.Costs
                .Where(x => x.EmployeeType.Equals(item.EmployeeType))
                .FirstAsync();

            founded.FullTimeCost = item.FullTimeCost;
            founded.PartTimeCost = item.PartTimeCost;
        }

        await _dbContext.SaveChangesAsync();
        return new OperationResult<bool>(true);
    }
}