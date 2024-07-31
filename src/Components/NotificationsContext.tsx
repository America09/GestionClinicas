import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationsContextProps {
  notificationCount: number;
  decrementNotification: () => void;
}

const NotificationsContext = createContext<NotificationsContextProps | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
};

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState<number>(0);

  const decrementNotification = () => setNotificationCount((count) => Math.max(count - 1, 0));

  return (
    <NotificationsContext.Provider value={{ notificationCount, decrementNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};
