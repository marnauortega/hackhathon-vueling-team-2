using System.Net.Http.Json;
using VY.Hackathon.Backend.Domain.Contracts.Proxies;
using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Dto.Proxies;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Proxy;

public class HandlingProxy : IHandlingProxy
{
    private readonly HttpClient _httpClient;
    private readonly string _handlingEndpoint;

    public HandlingProxy(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _handlingEndpoint = $"{_httpClient.BaseAddress}handling";
    }
    
    public async Task<OperationResult<IEnumerable<HandlingDto>>> GetHandlingByDay(HandlingProxyRequest handlingRequestDto)
    {
        var response = await _httpClient
            .PostAsJsonAsync(_handlingEndpoint, handlingRequestDto);

        if (response.IsSuccessStatusCode)
        {
            var result = await response.Content.ReadFromJsonAsync<IEnumerable<HandlingDto>>();
            return new OperationResult<IEnumerable<HandlingDto>>(result);
        }

        return new OperationResult<IEnumerable<HandlingDto>>(new ErrorResult("Proxy error!!"));
    }
}