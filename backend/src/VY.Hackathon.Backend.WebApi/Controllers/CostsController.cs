using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VY.Hackathon.Backend.Business.Contracts;
using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Dto.Result;
using VY.Hackathon.Backend.Domain.Entities;
using VY.Hackathon.Backend.WebApi.Helpers;

namespace VY.Hackathon.Backend.WebApi.Controllers;

[ApiController]
[Authorize(Roles = Role.Admin)]
[Route("[controller]")]
public class CostsController
{
    private readonly ICostService _costService;

    public CostsController(ICostService costService)
    {
        _costService = costService;
    }
    
    [HttpGet]
    [ProducesResponseType(typeof(ResultDto<IEnumerable<HandlingDto>>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetCosts()
    {
        var costsResult = await _costService.GetCosts();
        return costsResult.MapToApiResponse();
    }

    [HttpPut]
    [ProducesResponseType(typeof(ResultDto<bool>), StatusCodes.Status200OK)]
    public async Task<IActionResult> UpdateCosts([FromBody] IEnumerable<CostDto> items)
    {
        var updateResult = await _costService.UpdateCosts(items);
        return updateResult.MapToApiResponse();
    }
}