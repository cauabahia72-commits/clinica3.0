import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qjgixnsrqmlndqjhpsxd.supabase.co";
const supabaseKey = "sb_publishable_JqFXfC_RyNbCCXxbzep_5A_dXIMYSfw";


const banco = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.getElementById("form");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const celular = document.getElementById("celular").value;
  const email = document.getElementById("email").value;

  const { error } = await banco
    .from("pacientes")
    .insert([
      {
        nome: nome,
        celular: celular,
        email: email
      }
    ]);

  if (error) {
    alert("Erro ao cadastrar paciente.");
    console.log(error);
  } else {
    alert("Paciente cadastrado com sucesso!");
    form.reset();
  }
});