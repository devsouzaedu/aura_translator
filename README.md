# ∩ura Text Tr∩nsl∩tor

Um conversor de texto simples que substitui todas as letras "A" (maiúsculas e minúsculas) pelo símbolo de interseção "∩".

## 🚀 Como funciona

Digite qualquer texto e veja a mágica acontecer:
- "aura" → "∩ur∩"
- "Fato" → "F∩to"
- "Eduardo" → "Edu∩rdo"
- "Arma" → "∩rm∩"

## 💻 Desenvolvimento Local

### Instalação

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
```

## 🌐 Deploy

### Deploy na Vercel

1. Faça push do código para o GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/aura-translator.git
   git push -u origin main
   ```

2. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub

3. Clique em "New Project"

4. Importe seu repositório `aura-translator`

5. Configure o projeto:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. Clique em "Deploy"

Pronto! Seu site estará no ar em poucos segundos.

### Deploy manual com Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 📦 Tecnologias

- React
- Vite
- CSS3

## 📝 Licença

MIT

