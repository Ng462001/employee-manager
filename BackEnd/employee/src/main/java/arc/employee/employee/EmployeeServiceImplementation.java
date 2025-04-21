package arc.employee.employee;

import arc.employee.exception.EmployeeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImplementation implements EmployeeService {

    @Autowired
    EmployeeDAO employeeDAO;

    @Override
    public List<Employee> findAll() {
        return employeeDAO.findAll();
    }

    @Override
    public Employee findById(Integer id) throws EmployeeException {
        return employeeDAO.findById(id).orElseThrow(() -> new EmployeeException("Employee not found with id " + id));
    }

    @Override
    public Employee save(Employee employee) {
        return employeeDAO.save(employee);
    }

    @Override
    public String delete(Integer id) {
        employeeDAO.deleteById(id);
        return "Employee deleted with id " + id;
    }
}
