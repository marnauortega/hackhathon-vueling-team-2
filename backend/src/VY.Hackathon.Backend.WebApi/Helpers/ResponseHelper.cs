using Microsoft.AspNetCore.Mvc;
using VY.Hackathon.Backend.Domain.Extensions;
using VY.Hackathon.Backend.Domain.Poco;
using VY.Hackathon.Backend.Domain.Types;

namespace VY.Hackathon.Backend.WebApi.Helpers;

public static class ResponseHelper
{
    public static IActionResult MapToApiResponse<TResult>(this OperationResult<TResult> operationResult)
    {
        var mappedResult = operationResult.MapToResultDto();
        
        if (operationResult.IsSuccessful)
        {
            return new OkObjectResult(mappedResult);
        }

        var error = operationResult.Errors.FirstOrDefault();

        switch (error?.ErrorType)
        {
            case ErrorType.Validation:
                return new BadRequestObjectResult(mappedResult);
            case ErrorType.Authorization:
                return new UnauthorizedObjectResult(mappedResult);
            case ErrorType.NotFound:
                return new NotFoundObjectResult(mappedResult);
            case ErrorType.Unhandled:
            default:
                return new StatusCodeObjectResult(StatusCodes.Status500InternalServerError, mappedResult);
        }
    } 
}