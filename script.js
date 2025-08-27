function updateTime() {
            const timeEl = document.getElementById('current-time');
            const dateEl = document.getElementById('current-date');
            const now = new Date();
            const time = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false });
            const date = now.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
            
            if(timeEl) timeEl.textContent = time;
            if(dateEl) dateEl.textContent = date.replace(' de ', ' de ');
        }

        setInterval(updateTime, 1000);

        updateTime();