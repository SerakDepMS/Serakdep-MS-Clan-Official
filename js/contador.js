
(function() {
  const FECHA_FUNDACION = new Date('2023-01-01T00:00:00');
  
  function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - FECHA_FUNDACION;
    

    const segundosTotales = Math.floor(diferencia / 1000);
    const minutosTotales = Math.floor(segundosTotales / 60);
    const horasTotales = Math.floor(minutosTotales / 60);
    const diasTotales = Math.floor(horasTotales / 24);
    

    const aniosTotales = Math.floor(diasTotales / 365.25);
    const diasRestantesDespuesAnios = Math.floor(diasTotales - (aniosTotales * 365.25));
    

    const mesesTotales = Math.floor(diasRestantesDespuesAnios / 30.44);
    const diasRestantes = Math.floor(diasRestantesDespuesAnios - (mesesTotales * 30.44));
    

    const horasRestantes = horasTotales % 24;
    const minutosRestantes = minutosTotales % 60;
    const segundosRestantes = segundosTotales % 60;
    

    const elementos = {
      years: document.getElementById('counter-years'),
      months: document.getElementById('counter-months'),
      days: document.getElementById('counter-days'),
      hours: document.getElementById('counter-hours'),
      minutes: document.getElementById('counter-minutes'),
      seconds: document.getElementById('counter-seconds')
    };
    
    if (elementos.years) elementos.years.textContent = aniosTotales;
    if (elementos.months) elementos.months.textContent = mesesTotales;
    if (elementos.days) elementos.days.textContent = diasRestantes;
    if (elementos.hours) elementos.hours.textContent = horasRestantes;
    if (elementos.minutes) elementos.minutes.textContent = minutosRestantes;
    if (elementos.seconds) elementos.seconds.textContent = segundosRestantes;
  }
  

  actualizarContador();
  setInterval(actualizarContador, 1000);
})();