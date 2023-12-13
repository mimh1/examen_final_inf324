using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Configuration;
using System.Text;
using System.Data.SqlClient;
using System.Web.Services;

/// <summary>
/// Descripción breve de WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
// [System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService
{

    public WebService()
    {

        //Elimine la marca de comentario de la línea siguiente si utiliza los componentes diseñados 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld()
    {
        return "Hola a todos";
    }
    [WebMethod]
    public DataSet alumno()
    {
        string connectionString = "Server=localhost;Database=p2;User Id=inf324;Password=123456";
        string query = "SELECT * FROM alumno";

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            using (SqlDataAdapter adapter = new SqlDataAdapter(query, connection))
            {
                DataSet ds = new DataSet();
                adapter.Fill(ds, "alumno");
                return ds;
            }
        }
    }
    [WebMethod]
    public bool alta(int CI, string nombre, string apepaterno, string apematerno, string fechaNaci, string telefono)
    {
        string connectionString = ConfigurationManager.ConnectionStrings["TuConnectionStringSQLServer"].ConnectionString;

        using (SqlConnection con = new SqlConnection(connectionString))
        {
            using (SqlCommand command = new SqlCommand("INSERT INTO alumno (CI, nombre, apepaterno, apematerno, fechaNaci, telefono) VALUES (@CI, @nombre, @apepaterno, @apematerno, @fechaNaci, @telefono)", con))
            {
                command.Parameters.AddWithValue("@CI", CI);
                command.Parameters.AddWithValue("@nombre", nombre);
                command.Parameters.AddWithValue("@apepaterno", apepaterno);
                command.Parameters.AddWithValue("@apematerno", apematerno);
                // Asegúrate de convertir la fecha a un tipo de datos DateTime
                command.Parameters.AddWithValue("@fechaNaci", DateTime.Parse(fechaNaci));
                command.Parameters.AddWithValue("@telefono", telefono);

                con.Open();
                command.ExecuteNonQuery();
            }
        }

        return true;
    }

    [WebMethod]
    public Boolean baja(int id)
    {
        string connectionString = ConfigurationManager.ConnectionStrings["TuConnectionStringSQLServer"].ConnectionString;

        using (SqlConnection con = new SqlConnection(connectionString))
        {
            using (SqlCommand command = new SqlCommand("DELETE FROM alumno WHERE id = @id", con))
            {
                command.Parameters.AddWithValue("@id", id);

                con.Open();
                command.ExecuteNonQuery();
            }
        }

        return true;
    }
    [WebMethod]
    public bool cambio(int id, int CI, string nombre, string apepaterno, string apematerno, string fechaNaci, string telefono)
    {
        string connectionString = ConfigurationManager.ConnectionStrings["TuConnectionStringSQLServer"].ConnectionString;

        using (SqlConnection con = new SqlConnection(connectionString))
        {
            using (SqlCommand command = new SqlCommand("UPDATE alumno SET CI = @CI, nombre = @nombre, apepaterno = @apepaterno, apematerno = @apematerno, fechaNaci = @fechaNaci, telefono = @telefono WHERE id = @id", con))
            {
                command.Parameters.AddWithValue("@CI", CI);
                command.Parameters.AddWithValue("@nombre", nombre);
                command.Parameters.AddWithValue("@apepaterno", apepaterno);
                command.Parameters.AddWithValue("@apematerno", apematerno);
                command.Parameters.AddWithValue("@fechaNaci", DateTime.Parse(fechaNaci));
                command.Parameters.AddWithValue("@telefono", telefono);
                command.Parameters.AddWithValue("@id", id);

                con.Open();
                command.ExecuteNonQuery();
            }
        }

        return true;
    }

}
