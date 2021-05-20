import './utils/logger';
import app from './routes/index';
import './models/index';

const port = process.env.TRADING_PORT;

app.listen(port, () => global.logger.info(`Running on port ${port}`));
