using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace CRUD_AITS_OT.Controllers
{
    public class EmployeeController : ApiController
    {
        private AngularCRUDEntities db = new AngularCRUDEntities();

        // GET: api/Employee
        public IHttpActionResult GetEmployees()
        {
            var dataList = db.Employees
                   .Include(c => c.Department)
                  .ToList();


            var data = dataList.Select(c => new
            {
                address = c.address ?? "--",
                c.birthdate,
                c.contact_prefarence,
                c.department_id,
                email = c.email ?? "--",
                gender = c.gender ?? "--",
                c.id,
                name = c.name ?? "--",
                phone = c.phone ?? "--",
                departmentName = c.Department?.name ?? "--",
                departmentCode = c.Department?.code ?? "--"
            });

            return Ok(data);
        }

        // GET: api/Employee/5
        [ResponseType(typeof(Employee))]
        public IHttpActionResult GetEmployee(int id)
        {
            var model = db.Employees.FirstOrDefault(c => c.id == id);
            if (model != null)
            {
                var dto = new
                {
                    address = model.address ?? "--",
                    birthdate = model.birthdate,
                    contact_prefarence = model.contact_prefarence,
                    department_id = model.department_id,
                    email = model.email ?? "--",
                    gender = model.gender ?? "--",
                    id = model.id,
                    name = model.name ?? "--",
                    phone = model.phone ?? "--",
                    departmentName = model.Department?.name ?? "--",
                    departmentCode = model.Department?.code ?? "--"
                };
                return Ok(dto);
            }
            return NotFound();
        }

        // PUT: api/Employee/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployee(int id, Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee.id)
            {
                return BadRequest();
            }

            db.Entry(employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Employee
        [ResponseType(typeof(Employee))]
        public IHttpActionResult PostEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Employees.Add(employee);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employee.id }, employee);
        }

        // DELETE: api/Employee/5
        [ResponseType(typeof(Employee))]
        public IHttpActionResult DeleteEmployee(int id)
        {
            Employee employee = db.Employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            db.Employees.Remove(employee);
            db.SaveChanges();

            return Ok(employee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeExists(int id)
        {
            return db.Employees.Count(e => e.id == id) > 0;
        }
    }
}