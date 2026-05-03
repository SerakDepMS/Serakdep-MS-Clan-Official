(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tutorial-card');

    cards.forEach((card) => {
      const video = card.querySelector('video');
      const overlay = card.querySelector('.video-overlay');
      const bigPlayBtn = card.querySelector('.big-play-btn');
      const playPauseBtn = card.querySelector('.play-pause-btn');
      const timeDisplay = card.querySelector('.time-display');
      const progressContainer = card.querySelector('.progress-container');
      const progressFill = card.querySelector('.progress-fill');
      const progressThumb = card.querySelector('.progress-thumb');
      const muteBtn = card.querySelector('.mute-btn');
      const volumeSlider = card.querySelector('.volume-slider');
      const fullscreenBtn = card.querySelector('.fullscreen-btn');
      const wrapper = card.querySelector('.video-wrapper');

      if (!video || !wrapper) return;


      const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      };


      const updateProgress = () => {
        if (video.duration) {
          const percent = (video.currentTime / video.duration) * 100;
          if (progressFill) progressFill.style.width = percent + '%';
          if (progressThumb) progressThumb.style.left = percent + '%';
          if (timeDisplay) timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        }
      };


      const togglePlay = () => {
        if (video.paused) {
          video.play();
          wrapper.classList.add('playing');
          if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
          video.pause();
          wrapper.classList.remove('playing');
          if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
      };


      if (bigPlayBtn) {
        bigPlayBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          togglePlay();
        });
      }

      if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlay);
      }

      video.addEventListener('click', togglePlay);

      video.addEventListener('timeupdate', updateProgress);
      
      video.addEventListener('loadedmetadata', () => {
        if (timeDisplay) timeDisplay.textContent = `00:00 / ${formatTime(video.duration)}`;
      });

      video.addEventListener('ended', () => {
        wrapper.classList.remove('playing');
        if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        if (progressFill) progressFill.style.width = '0%';
        if (progressThumb) progressThumb.style.left = '0%';
      });


      if (progressContainer) {
        progressContainer.addEventListener('click', (e) => {
          const rect = progressContainer.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const percent = clickX / rect.width;
          video.currentTime = percent * video.duration;
        });
      }


      if (volumeSlider) {
        volumeSlider.addEventListener('input', () => {
          video.volume = volumeSlider.value;
          if (muteBtn) {
            muteBtn.innerHTML = video.volume === 0 
              ? '<i class="fas fa-volume-mute"></i>' 
              : '<i class="fas fa-volume-up"></i>';
          }
        });
      }

      if (muteBtn) {
        muteBtn.addEventListener('click', () => {
          if (video.volume > 0) {
            video.dataset.lastVolume = video.volume;
            video.volume = 0;
            if (volumeSlider) volumeSlider.value = 0;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
          } else {
            const lastVolume = parseFloat(video.dataset.lastVolume) || 1;
            video.volume = lastVolume;
            if (volumeSlider) volumeSlider.value = lastVolume;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
          }
        });
      }


      const updateFullscreenIcon = () => {
        const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
        if (fullscreenBtn) {
          fullscreenBtn.innerHTML = isFullscreen 
            ? '<i class="fas fa-compress"></i>' 
            : '<i class="fas fa-expand"></i>';
        }
      };

      if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
          const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
          
          if (isFullscreen) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
          } else {
            if (wrapper.requestFullscreen) {
              wrapper.requestFullscreen();
            } else if (wrapper.webkitRequestFullscreen) {
              wrapper.webkitRequestFullscreen();
            }
          }
        });
      }


      document.addEventListener('fullscreenchange', updateFullscreenIcon);
      document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
    });
  });
})();