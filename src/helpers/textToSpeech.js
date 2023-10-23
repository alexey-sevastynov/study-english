export const textToSpeech = (text, voiceName, rate, pitch) => {
  if ("speechSynthesis" in window) {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = synthesis.getVoices();
    const selectedVoice = voices.find((voice) => voice.name === voiceName);
    utterance.voice = selectedVoice || voices[0];

    utterance.rate = rate || 1;
    utterance.pitch = pitch || 1;

    synthesis.speak(utterance);
  } else {
    console.error("Text-to-speech is not supported in this browser.");
  }
};
