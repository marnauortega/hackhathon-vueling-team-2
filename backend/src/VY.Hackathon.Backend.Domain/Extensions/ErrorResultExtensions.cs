using VY.Hackathon.Backend.Domain.Dto.Result;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Domain.Extensions;

public static class ErrorResultExtensions
{
    public static ErrorDto MapToErrorDto(this ErrorResult errorResult)
    {
        return new ErrorDto
        {
            Code = errorResult.Code,
            Message = errorResult.Message
        };
    }
}