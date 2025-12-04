import React from "react";

const NotFound: React.FC = () => {
  const notFoundStyles = `
    .not-found-container {
      text-align: center;
      padding: 4rem 2rem;
      min-height: 70vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .not-found-icon {
      font-size: 6rem;
      margin-bottom: 2rem;
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .not-found-container h1 {
      font-size: 3.5em;
      color: #7a5cff;
      margin: 0 0 1rem 0;
      font-weight: 800;
    }

    .not-found-container p {
      font-size: 1.2em;
      color: #555;
      max-width: 600px;
      line-height: 1.6;
      margin: 1rem 0;
    }

    .not-found-link {
      display: inline-block;
      margin-top: 2rem;
      padding: 1rem 2rem;
      background-color: #7a5cff;
      color: white;
      text-decoration: none;
      border-radius: 10px;
      transition: background-color 0.3s ease, transform 0.3s ease;
      font-weight: bold;
      font-size: 1.1em;
    }

    .not-found-link:hover {
      background-color: #5a3fd9;
      transform: translateY(-3px);
      color: white;
    }

    @media (max-width: 768px) {
      .not-found-container h1 {
        font-size: 2.2em;
      }

      .not-found-icon {
        font-size: 5rem;
      }

      .not-found-container p {
        font-size: 1em;
      }
    }
  `;

  return (
    <>
      <style>{notFoundStyles}</style>
      <div className="not-found-container">
        <div className="not-found-icon">🍺</div>
        <h1>Error 404</h1>
        <p>
          Oof! Vypadá to, že jste se umořili v pivu a ztratili jste cestu! 
          Stránka, kterou hledáte, byla buď odstraněna, přemístěna, přejmenována 
          nebo jsme si ji vypili dříve, než jste ji stihli navštívit.
        </p>
        <p>
          Pojďte se vrátit domů a dejte si pivo! 🍻
        </p>
        <a href="/" className="not-found-link">
          Zpět na úvod
        </a>
      </div>
    </>
  );
};

export default NotFound;