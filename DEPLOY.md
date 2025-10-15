# 🚀 Guia de Deploy - ∩ura Text Tr∩nsl∩tor

## 📋 Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta na [Vercel](https://vercel.com)

## 🔧 Passo 1: Publicar no GitHub

### Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `aura-translator`
3. Deixe como público ou privado (sua escolha)
4. **NÃO** marque "Initialize this repository with a README"
5. Clique em "Create repository"

### Conectar seu projeto local ao GitHub

```bash
# Você já tem o git iniciado, então só precisa:
git remote add origin https://github.com/SEU-USUARIO/aura-translator.git
git branch -M main
git push -u origin main
```

⚠️ **Importante**: Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

## 🌐 Passo 2: Deploy na Vercel

### Método 1: Deploy via Dashboard (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Login" e entre com sua conta GitHub
3. Clique em "Add New..." → "Project"
4. Encontre o repositório `aura-translator` e clique em "Import"
5. A Vercel detectará automaticamente que é um projeto Vite
6. Mantenha as configurações padrão:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
7. Clique em "Deploy"

🎉 Pronto! Em 1-2 minutos seu site estará no ar!

### Método 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

## 🔄 Atualizações Futuras

Sempre que você fizer alterações:

```bash
git add .
git commit -m "Sua mensagem de commit"
git push
```

A Vercel automaticamente fará o deploy das novas versões! 🚀

## 🔗 Links Úteis

Após o deploy, você receberá:
- **URL de Produção**: `https://aura-translator.vercel.app` (ou similar)
- **URL de Preview**: Para cada branch/commit

## 📊 Domínio Personalizado (Opcional)

1. Na dashboard da Vercel, vá em seu projeto
2. Clique em "Settings" → "Domains"
3. Adicione seu domínio personalizado
4. Siga as instruções para configurar o DNS

## 🐛 Solução de Problemas

### Build falha na Vercel

Verifique se:
- O `package.json` está correto
- Todas as dependências estão instaladas
- O código compila localmente com `npm run build`

### Site não carrega corretamente

- Limpe o cache do navegador
- Verifique o console do navegador (F12)
- Veja os logs na dashboard da Vercel

## 📞 Suporte

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Vite](https://vitejs.dev)
- [Documentação React](https://react.dev)

