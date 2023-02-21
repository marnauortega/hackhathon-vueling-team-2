using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Dto.Proxies;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Domain.Contracts.Proxies;

public interface IHandlingProxy
{
    Task<OperationResult<IEnumerable<HandlingDto>>> GetHandlingByDay(HandlingProxyRequest handlingRequestDto);
}