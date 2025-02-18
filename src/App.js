import { useState } from "react";

const questions = [
  { text: "J'aime prendre des décisions rapidement.", category: "D" },
  { text: "J'aime être entouré(e) de gens et discuter avec eux.", category: "I" },
  { text: "Je préfère un environnement stable et prévisible.", category: "S" },
  { text: "J'aime que les règles soient respectées.", category: "C" },
  { text: "Je prends des risques facilement.", category: "D" },
  { text: "Je suis souvent enthousiaste et expressif(ve).", category: "I" },
  { text: "J’aime travailler en équipe et en harmonie.", category: "S" },
  { text: "J’ai un grand souci du détail.", category: "C" },
  { text: "Je préfère diriger plutôt que suivre.", category: "D" },
  { text: "J'aime inspirer et motiver les autres.", category: "I" },
  { text: "Je recherche la stabilité dans mes relations et mon travail.", category: "S" },
  { text: "Je suis très méthodique et organisé(e).", category: "C" },
  { text: "Je prends des décisions même sous pression.", category: "D" },
  { text: "J'aime être le centre de l'attention.", category: "I" },
  { text: "Je suis patient(e) et calme face aux défis.", category: "S" },
  { text: "Je préfère que tout soit bien structuré et prévisible.", category: "C" },
  { text: "J’aime relever des défis et surmonter des obstacles.", category: "D" },
  { text: "Je suis optimiste et j'aime inspirer les autres.", category: "I" },
  { text: "Je suis loyal(e) et fiable.", category: "S" },
  { text: "Je préfère suivre des procédures précises.", category: "C" },
  { text: "Je prends souvent des initiatives audacieuses.", category: "D" },
  { text: "J'aime raconter des histoires et captiver mon public.", category: "I" },
  { text: "J'accorde une grande importance à la coopération.", category: "S" },
  { text: "Je suis très attentif aux détails.", category: "C" },
  { text: "Je suis compétitif et orienté vers les résultats.", category: "D" },
  { text: "J'aime travailler dans un environnement dynamique et vivant.", category: "I" },
  { text: "J'apprécie la routine et la prévisibilité.", category: "S" },
  { text: "Je préfère analyser les choses en profondeur avant d'agir.", category: "C" },
  { text: "Je prends des décisions avec assurance.", category: "D" },
  { text: "Je cherche toujours à influencer positivement mon entourage.", category: "I" },
  { text: "J'aime aider les autres et les soutenir émotionnellement.", category: "S" },
  { text: "J'aime structurer et organiser mon travail minutieusement.", category: "C" },
  { text: "Je suis à l'aise avec les confrontations directes.", category: "D" },
  { text: "J'apprécie les interactions sociales et les événements en groupe.", category: "I" },
  { text: "Je valorise la fidélité et la confiance.", category: "S" },
  { text: "Je préfère des instructions précises et détaillées.", category: "C" }
];

export default function DiscForm() {
  const [responses, setResponses] = useState(Array(questions.length).fill(0));
  const [submitted, setSubmitted] = useState(false);
  const scores = { D: 0, I: 0, S: 0, C: 0 };

  responses.forEach((value, index) => {
    scores[questions[index].category] += value;
  });

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  return (
    <div className="border rounded-lg p-6 max-w-2xl mx-auto mt-6 shadow">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Test DISC</h2>
        {!submitted ? (
          <div>
            {questions.map((q, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium">{q.text}</p>
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={responses[index]}
                  onChange={(e) => handleChange(index, parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            ))}
            <button onClick={() => setSubmitted(true)} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Voir les résultats</button>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold mb-3">Résultats :</h3>
            {Object.entries(scores).map(([key, value]) => (
              <div key={key} className="mb-2">
                <p className="font-medium">{key} : {value}</p>
                <progress className="w-full" max="100" value={(value / (questions.length * 5)) * 100} />
              </div>
            ))}
            <button onClick={() => setSubmitted(false)} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
}
