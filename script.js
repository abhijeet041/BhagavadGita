 document.addEventListener('DOMContentLoaded', function() {
    const verseList = document.getElementById('verse-list');
  
    const chapters = [
      {
        number: 1,
        verses: [
          { number: 1, text: 'धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |', hindi: 'धृतराष्ट्र ने कहा: युद्ध लड़ने की इच्छा से कुरुक्षेत्र के पवित्र मैदान में एकत्रित होकर मेरी प्रजा और पांडवों ने क्या किया? हे संजय!', english: 'Dhritarashtra said: Having assembled on the holy plain in Kurukshetra desirous of fighting the battle, what did my people and the Pandavas do? O Sanjaya!' },
          { number: 2, text: 'सञ्जय उवाच ।दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा ।आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ', hindi: 'संजय ने कहा: युद्ध के लिए तैयार पांडव सेना को देखकर, राजा दुर्योधन अपने गुरु के पास गए और ये शब्द बोले:', english: 'Sanjaya said: On seeing the Pāndava army arrayed for battle, King Duryodhana went to his teacher and spoke these words: ' },
          { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 2,
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 3,
        verses: [
          { number: 1, text: '', hindi: '', english: '' },
          { number: 2, text: '', hindi: '', english: '' },
          { number: 3, text: '', hindi: '', english: '' },
          { number: 4, text: '', hindi: '', english: '' },
          { number: 5, text: '', hindi: '', english: '' },
          { number: 6, text: '', hindi: '', english: '' },
          { number: 7, text: '', hindi: '', english: '' },
          { number: 8, text: '', hindi: '', english: '' },
          { number: 9, text: '', hindi: '', english: '' },
          { number: 10, text: '', hindi: '', english: '' },
          
        ]
      },
    ];
  
    function displayVerses() {
      verseList.innerHTML = '';
      chapters.forEach(chapter => {
        const chapterHeading = document.createElement('h2');
        chapterHeading.textContent = `Chapter ${chapter.number}`;
        verseList.appendChild(chapterHeading);
        chapter.verses.forEach(verse => {
          const verseItem = document.createElement('div');
          verseItem.classList.add('verse-item');
          verseItem.innerHTML = `
            <h3>${verse.number}</h3>
            <p><strong>Sanskrit:</strong> ${verse.text}</p>
            <p><strong>Hindi:</strong> ${verse.hindi}</p>
            <p><strong>English:</strong> ${verse.english}</p>
          `;
          verseList.appendChild(verseItem);
        });
      });
    }
  
    displayVerses();
  });
  

  