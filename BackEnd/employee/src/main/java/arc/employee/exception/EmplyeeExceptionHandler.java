package arc.employee.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class EmplyeeExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<EmplyeeExceptionResponse> handleEmployeeException(EmployeeException employeeException) {

        EmplyeeExceptionResponse exceptionResponse = new EmplyeeExceptionResponse();
        exceptionResponse.setMessage(employeeException.getMessage());
        exceptionResponse.setTimestamp(System.currentTimeMillis());
        exceptionResponse.setStatusCode(HttpStatus.NOT_FOUND.value());

        return new ResponseEntity<>(exceptionResponse , HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<EmplyeeExceptionResponse> handleException(Exception exception) {

        EmplyeeExceptionResponse exceptionResponse = new EmplyeeExceptionResponse();
        exceptionResponse.setMessage(exception.getMessage());
        exceptionResponse.setTimestamp(System.currentTimeMillis());
        exceptionResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());

        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}
