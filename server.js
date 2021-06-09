const Hapi = require("@Hapi/Hapi");
const init = async()=>{
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });
  server.route({
    method:"GET",
    path:"/",
    handler:(request,h)=>{
      return "First Hapi Server";
    }
  });
  server.route({
    method:"GET",
    path:"/infinite",
    handler:(request,h)=>{
      while(1){
        console.log("Event Loop Blocked");
      }
    }
  });
    server.route({
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {

            return 'Page Not Created';
        }
    });
  await server.start();
  console.log("Server is running on port", server.info.uri);

};


init();
