using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VY.Hackathon.Backend.Business.Contracts;
using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Dto.Result;
using VY.Hackathon.Backend.WebApi.Helpers;

namespace VY.Hackathon.Backend.WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class HandlingController
{
    private readonly IHandlingService _handlingService;

    public HandlingController(IHandlingService handlingService)
    {
        _handlingService = handlingService;
    }

    [HttpGet]
    [Authorize]
    [ProducesResponseType(typeof(ResultDto<IEnumerable<HandlingDto>>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetByDateRange(DateTime startDate, DateTime endDate)
    {
        var handlingResult = await _handlingService.GetHandlingByDateRange(startDate, endDate);
        return handlingResult.MapToApiResponse();
    }
}