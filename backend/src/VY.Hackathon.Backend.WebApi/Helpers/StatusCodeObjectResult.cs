using Microsoft.AspNetCore.Mvc;

namespace VY.Hackathon.Backend.WebApi.Helpers;

public class StatusCodeObjectResult : ObjectResult
{
    public StatusCodeObjectResult(int httpStatusCode, object value = null)
        : base(value)
    {
        base.StatusCode = httpStatusCode;
    }
}