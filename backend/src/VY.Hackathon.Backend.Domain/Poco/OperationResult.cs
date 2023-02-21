namespace VY.Hackathon.Backend.Domain.Poco;

public class OperationResult<TResult>
{
    public OperationResult(TResult result)
    {
        Result = result;
        Errors = new List<ErrorResult>();
    }
    
    public OperationResult(ErrorResult errorResult)
    {
        Errors = new List<ErrorResult> { errorResult };
    }
    
    public OperationResult(List<ErrorResult> errorResults)
    {
        Errors = errorResults;
    }

    public TResult Result { get; }
    public List<ErrorResult> Errors { get; }
    public bool IsSuccessful => Errors.Count == 0;
}