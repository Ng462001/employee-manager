package arc.employee.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmplyeeExceptionResponse  {

    private String message;

    private int statusCode;

    private long timestamp;

}
