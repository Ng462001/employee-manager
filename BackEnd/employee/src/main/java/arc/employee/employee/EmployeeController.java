package arc.employee.employee;

import arc.employee.exception.EmployeeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("https://employee-manager-ng.vercel.app")
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getAllEmployee() {
        return employeeService.findAll();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable int id) throws EmployeeException {
        if (id == 0 || employeeService.findById(id) == null) {
            throw new EmployeeException("Employee not found with id " + id);
        } else {
            return employeeService.findById(id);
        }
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) throws EmployeeException {
        if (employee == null) {
            throw new EmployeeException("Employee is null");
        }
        return employeeService.save(employee);
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee employee) throws EmployeeException {
        if (employee.getId() == 0 || employeeService.findById(employee.getId()) == null) {
            throw new EmployeeException("Employee not found with id " + employee.getId());
        } else {
            return employeeService.save(employee);
        }
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable int id) throws EmployeeException {
        if (id == 0 || employeeService.findById(id) == null) {
            throw new EmployeeException("Employee not found with id " + id);
        } else {
            return employeeService.delete(id);
        }
    }
}
