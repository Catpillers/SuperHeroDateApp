using Microsoft.AspNetCore.Http;

namespace SuperDate.Helper
{
    static class Extensions
    {
        public static void AddAppError(this HttpResponse responce, string message)
        {
            responce.Headers.Add("Application-Error", message);
            responce.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            responce.Headers.Add("Access-Control-Allow-Origin", "*");
        }




    }
}