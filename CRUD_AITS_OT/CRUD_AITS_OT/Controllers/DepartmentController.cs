using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CRUD_AITS_OT;

namespace CRUD_AITS_OT.Controllers
{
    public class DepartmentController : ApiController
    {
        private AngularCRUDEntities db = new AngularCRUDEntities();

        // GET: api/Department
        public IHttpActionResult GetDepartments()
        {
            var dataList = db.Departments.ToList() ;
            var data = dataList.Select(c => new
            {
                c.id,
                c.name,
                c.code,
            });
            return Ok(data);
        }

        // GET: api/Department/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult GetDepartment(int id)
        {
            var model = db.Departments.FirstOrDefault(c => c.id == id);
            if (model != null)
            {
                var dto = new {
                    id = model.id,
                    name = model.name,
                    code = model.code,
                };
                return Ok(dto);
            }
            return NotFound();
        }

        // PUT: api/Department/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDepartment(int id, Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != department.id)
            {
                return BadRequest();
            }

            db.Entry(department).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartmentExists(id))
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

        // POST: api/Department
        [ResponseType(typeof(Department))]
        public IHttpActionResult PostDepartment(Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Departments.Add(department);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = department.id }, department);
        }

        // DELETE: api/Department/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult DeleteDepartment(int id)
        {
            Department department = db.Departments.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            db.Departments.Remove(department);
            db.SaveChanges();

            return Ok(department);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DepartmentExists(int id)
        {
            return db.Departments.Count(e => e.id == id) > 0;
        }
    }
}