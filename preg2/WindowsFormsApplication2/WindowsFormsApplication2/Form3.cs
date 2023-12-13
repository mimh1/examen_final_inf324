using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication2
{
    public partial class Form3 : Form
    {
        public Form3()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // Check if the CI TextBox is not empty
            if (!string.IsNullOrEmpty(textBox1.Text))
            {
                // Convert CI to integer (assuming CI is numeric)
                int ciToDelete = Convert.ToInt32(textBox1.Text);

                // Call the web service method to delete the student
                ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
                ws.baja(ciToDelete);

                // Display a message
                MessageBox.Show("Alumno eliminado", "Mensaje");
            }
            else
            {
                MessageBox.Show("Ingrese un CI válido", "Error");
            }
            this.Close();
        }

        private void dataGridView1_VisibleChanged(object sender, EventArgs e)
        {
            ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
            DataSet ds = new DataSet();
            ds = ws.alumno();
            dataGridView1.DataSource = ds.Tables[0];
        }
    }
}
