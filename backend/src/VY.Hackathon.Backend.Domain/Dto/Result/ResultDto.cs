namespace VY.Hackathon.Backend.Domain.Dto.Result;

public class ResultDto<TResult>
{
    public TResult Result { get; set; }
    public List<ErrorDto> Errors { get; set; }
    public bool IsOk => (Errors?.Count ?? 0) == 0;
}