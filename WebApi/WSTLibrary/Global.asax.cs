using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using WSTLibrary.Models;
using WSTLibrary.Repository;

namespace WSTLibrary
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(Assembly.GetExecutingAssembly());
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterType<LibraryContext>().InstancePerRequest();
            builder.RegisterType<Repository<Book>>().AsImplementedInterfaces();
            builder.RegisterType<Repository<Customer>>().AsImplementedInterfaces();
            builder.RegisterType<Repository<Borrow>>().AsImplementedInterfaces();
            builder.RegisterType<Repository<Author>>().AsImplementedInterfaces();

            var cointainer = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(cointainer));
            GlobalConfiguration.Configuration.DependencyResolver =
            new AutofacWebApiDependencyResolver(cointainer);

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
