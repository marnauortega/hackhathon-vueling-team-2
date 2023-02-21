using VY.Hackathon.Backend.Business.Contracts;
using VY.Hackathon.Backend.Domain.Contracts.Proxies;
using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Dto.Proxies;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Business;

public class HandlingService : IHandlingService
{
    private readonly IHandlingProxy _handlingProxy;
    private readonly ICostService _costService;

    public HandlingService(IHandlingProxy handlingProxy, ICostService costService)
    {
        _handlingProxy = handlingProxy;
        _costService = costService;
    }

    public async Task<OperationResult<IEnumerable<HandlingDto>>> GetHandlingByDateRange(DateTime startDate, DateTime endDate)
    {
        var costsResult = await _costService.GetCosts();

        if (!costsResult.IsSuccessful)
        {
            return new OperationResult<IEnumerable<HandlingDto>>(costsResult.Errors);
        }

        var handlingProxyRequest = new HandlingProxyRequest
        {
            Day = startDate.ToString("yyyy-MM-dd"),
            Costs = costsResult.Result
        };

        return await _handlingProxy.GetHandlingByDay(handlingProxyRequest);
    }
}