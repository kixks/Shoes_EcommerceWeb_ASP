using Microsoft.AspNetCore.Mvc;

namespace eCommerceWebApp.Controllers
{
    public class VideoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
