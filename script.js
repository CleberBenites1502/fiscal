    function calcularMVA() {
      const mvaST = parseFloat(document.getElementById("mvaST").value) / 100;
      const alqInter = parseFloat(document.getElementById("alqInter").value) / 100;
      const alqIntra = parseFloat(document.getElementById("alqIntra").value) / 100;

      if (isNaN(mvaST) || isNaN(alqInter) || isNaN(alqIntra)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
      }

      const mvaAjustado = (((1 + mvaST) * (1 - alqInter) / (1 - alqIntra)) - 1) * 100;

      document.getElementById("resultado").innerText = `MVA Ajustado: ${mvaAjustado.toFixed(2)}%`;
    }