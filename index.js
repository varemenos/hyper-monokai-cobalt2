exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
      foregroundColor: '#fff',
      backgroundColor: '#122637',
      borderColor: '#333',
      cursorColor: 'rgba(248,28,229,0.8)',
      colors: {
        black: '#666',
        red: '#D01B24',
        green: '#A7D32C',
        yellow: '#D8CF67',
        blue: '#61B8D0',
        magenta: '#695ABB',
        cyan: '#D53864',
        white: '#FEFFFE',
        lightBlack: '#999',
        lightRed: '#D01B24',
        lightGreen: '#A7D32C',
        lightYellow: '#D8CF67',
        lightBlue: '#61B8D0',
        lightMagenta: '#695ABB',
        lightCyan: '#D53864',
        lightWhite: '#FEFFFE'
      }
  });
}
