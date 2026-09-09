<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-left">
        <span class="footer-name">Daniel Kling</span>
        <span class="footer-location">Stuttgart, Germany</span>
      </div>
      <div class="footer-links">
        <a href="https://www.behance.net/danielkling2" target="_blank" rel="noopener">Behance</a>
        <a href="https://www.linkedin.com/in/daniel-kling-413761235/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://www.crew-united.com/de/Daniel-Kling_571716.html#!searchterm=Daniel%20kling" target="_blank"
          rel="noopener">Crew United</a>
        <a href="https://www.imdb.com/de/name/nm4396803/" target="_blank" rel="noopener">IMDb</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 40px 0;
  margin-top: 120px;
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-name {
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.footer-location {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .footer-inner {
    padding: 0 20px;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer-left {
    align-items: center;
  }
}
</style>
