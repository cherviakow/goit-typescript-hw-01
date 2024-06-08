export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  

  // Замініть наступний код на версію за допомогою Record

  type description = Record< UserRole, string >;


  export const RoleDescription: description = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
  };