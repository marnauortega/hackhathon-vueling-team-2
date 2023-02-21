namespace VY.Hackathon.Backend.Domain.Dto.Proxies;

public record HandlingProxyRequest
{
    public string Day { get; set; }
    public IEnumerable<CostDto> Costs { get; set; }
}