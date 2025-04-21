package arc.employee.employee;

import arc.employee.exception.EmployeeException;

import java.util.List;

public interface EmployeeService {

    public List<Employee> findAll();

    public Employee findById(Integer id) throws EmployeeException;

    public Employee save(Employee employee);

    public String delete(Integer id);

}
