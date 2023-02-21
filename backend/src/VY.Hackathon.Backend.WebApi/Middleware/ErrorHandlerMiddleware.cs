using System.Text.Json;
using VY.Hackathon.Backend.Domain.Extensions;
using VY.Hackathon.Backend.Domain.Poco;
using VY.Hackathon.Backend.Domain.Types;

namespace VY.Hackathon.Backend.WebApi.Middleware;

public class ErrorHandlerMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ErrorHandlerMiddleware> _logger;

    public ErrorHandlerMiddleware(RequestDelegate next, ILogger<ErrorHandlerMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            const string errorMessage = "Unexpected error!";
            _logger.LogError(ex, errorMessage);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            var operationResult = new OperationResult<object>(new ErrorResult(errorMessage, ex, ErrorType.Unhandled));
            var result = JsonSerializer.Serialize(operationResult.MapToResultDto());
            await context.Response.WriteAsync(result);
        }
    }
}