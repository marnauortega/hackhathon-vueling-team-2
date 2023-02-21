using VY.Hackathon.Backend.Domain.Dto.Result;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Domain.Extensions;

public static class OperationResultExtensions
{
    public static ResultDto<TResult> MapToResultDto<TResult>(this OperationResult<TResult> operationResult)
    {
        return new ResultDto<TResult>
        {
            Result = operationResult.Result,
            Errors = operationResult.Errors.Select(x => x.MapToErrorDto()).ToList()
        };
    }
}