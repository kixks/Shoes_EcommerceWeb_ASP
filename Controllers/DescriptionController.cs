using eCommerceWebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace eCommerceWebApp.Controllers
{
    public class DescriptionController : Controller
    {
        public IActionResult Index()
        {
            var DescriptionPosts = new List<DescriptionViewModel>
            {
                new DescriptionViewModel()
                {
                    Id = 0,
                    HexColor = "#9a97a2",
                    Header = "Description",
                    Price = "₱10,200.00",
                    Title = "AirForce 1 (Retro Low-Top)",
                    DateCreated = "July 27, 2007",
                    Description ="Crisp leather edges offer a clean, streamlined silhouette. The leather and textile upper includes strategically placed overlays for added durability and support. The durable foam midsole includes a Nike Air unit for lightweight cushioning.",
                    ImageUrl = "pngegg (2).png"
                },
                new DescriptionViewModel()
                {
                    Id = 1,
                    HexColor = "#89050d",
                    Header = "Description",
                    Price = "₱15,100.00",
                    Title = "Nike AirMax 90 All-Red",
                    DateCreated = "July 17, 2010",
                    Description = "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.",
                    ImageUrl = "pngegg (1).png"
                },
                new DescriptionViewModel()
                {
                    Id = 2,
                    HexColor = "#353c42",
                    Header = "Description",
                    Price = "₱20,600.00",
                    Title = "Air Jordan 31 Red",
                    DateCreated = "August 4, 2005",
                    Description = "Boasting a basketball-inspired silhouette, the Air Jordan 31 features an ankle length. Its design is highlighted with a Jumpman logo on the sides while a gradient effect covers the rest. Underneath, a two-tone rubber sole adds comfort and traction.",
                    ImageUrl = "pngegg (3).png"
                }
            };
            return View(DescriptionPosts);
        }
    }
}
