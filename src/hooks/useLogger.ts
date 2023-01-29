interface IConsole {
  log: (message?: any, ...optionalParams: any[]) => void;
  error: (message?: any, ...optionalParams: any[]) => void;
  warn: (message?: any, ...optionalParams: any[]) => void;
}

const useLogger = () => {
  const { log } = console;
  const { error } = console;
  const { warn } = console;

  const logger: IConsole = { log, warn, error };

  return logger;
};

export default useLogger;
