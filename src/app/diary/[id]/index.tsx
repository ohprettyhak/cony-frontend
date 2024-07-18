import { ReactElement } from 'react';

import Layout from '@/components/layouts/Layout';

export default function Page({
  params,
}: {
  params: { id: string };
}): ReactElement {
  return <Layout></Layout>;
}
