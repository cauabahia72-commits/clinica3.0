
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://qjgixnsrqmlndqjhpsxd.supabase.co";
const supabaseKey = "sb_publishable_JqFXfC_RyNbCCXxbzep_5A_dXIMYSfw";

export const banco = createClient(supabaseUrl, supabaseKey);

const botao = document.getElementById("btnEnviar");

if(botao){
    botao.addEventListener("click", async (e) =>{
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const numero = document.getElementById("numero").value.trim();

        if (!nome || !numero || !email){
            alert("prencha todos os campos");
            return;
        }

        await inserir(numero, nome, email);
    });
}

async function inserir(numero, nome, email) {
    const{error} = await banco.from("pacientes") .insert([{numero, nome, email}]);

    if(error){
        console.log("erro");
        alert("Erro ao inserir");
        return;
    }
    
    alert("usuario cadastrado");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("numero").value = "";

}