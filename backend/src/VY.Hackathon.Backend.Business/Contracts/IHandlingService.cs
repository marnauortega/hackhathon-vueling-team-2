using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Business.Contracts;

public interface IHandlingService
{
    Task<OperationResult<IEnumerable<HandlingDto>>> GetHandlingByDateRange(DateTime startDate, DateTime endDate);
}