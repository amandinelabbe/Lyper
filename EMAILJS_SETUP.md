# Configuration EmailJS pour le portfolio Lyper

## Étapes pour configurer l'envoi d'emails direct

### 1. Créer un compte EmailJS
- Aller sur https://www.emailjs.com/
- Créer un compte gratuit (100 emails/mois)

### 2. Configurer un service email
- Dans le dashboard EmailJS, aller dans "Email Services"
- Cliquer "Add Service"
- Choisir votre fournisseur email (Gmail recommandé)
- Suivre les instructions pour connecter votre compte

### 3. Créer un template d'email
- Aller dans "Email Templates"
- Cliquer "Create New Template"
- Utiliser ce template :

```
Sujet: Nouveau message depuis le portfolio Lyper

Bonjour,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Ce message a été envoyé depuis lyper.fr
```

### 4. Récupérer les informations
- **Service ID** : Dans "Email Services", copier l'ID de votre service
- **Template ID** : Dans "Email Templates", copier l'ID de votre template  
- **Public Key** : Dans "Account" > "General", copier votre Public Key

### 5. Mettre à jour la configuration
Dans le fichier `src/config/emailjs.ts`, remplacer :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xyz123', // Votre Service ID
  TEMPLATE_ID: 'template_abc456', // Votre Template ID
  PUBLIC_KEY: 'user_def789', // Votre Public Key
};
```

### 6. Test
Une fois configuré, le formulaire enverra les emails directement sans redirection !

## Fallback actuel
Si EmailJS n'est pas configuré, le système utilise encore `mailto:` comme fallback.