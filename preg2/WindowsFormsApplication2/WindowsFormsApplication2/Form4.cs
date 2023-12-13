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
    public partial class Form4 : Form
    {
        public Form4()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {
        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {
        }

        private void textBox5_TextChanged(object sender, EventArgs e)
        {
        }

        private void button1_Click(object sender, EventArgs e)
        {
                // Validate input (you may add more validation as needed)
                if (string.IsNullOrEmpty(textBox1.Text))
                {
                    MessageBox.Show("Ingrese un ID válido", "Error");
                    return;
                }
                // Call the web service method to update student information
                ServiceReference1.WebServiceSoapClient ws = new ServiceReference1.WebServiceSoapClient();
                bool success = ws.cambio(Convert.ToInt32(textBox1.Text), Convert.ToInt32(textBox2.Text), textBox3.Text, textBox4.Text, textBox5.Text, textBox6.Text, textBox7.Text);

                if (success)
                {
                    // Display a message
                    MessageBox.Show("Información del alumno actualizada", "Mensaje");
                }
                else
                {
                    MessageBox.Show("No se pudo actualizar la información del alumno", "Error");
                }
                this.Close();
        }

        private void textBox6_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox7_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
