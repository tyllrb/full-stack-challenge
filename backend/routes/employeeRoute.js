import * as employeeController from '../controllers/employeeController'

export default function employeeRoute(app) {
	app.route('/employee')
		.get(employeeController.getEmployees)

	app.route('/employee/:id')
		.get(employeeController.getEmployee)
		.post(employeeController.createEmployee)
		.put(employeeController.updateEmployee)
}