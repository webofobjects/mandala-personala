import type { APIRoute, GetStaticPaths } from 'astro';
import { haloSvg } from '../../lib/halo';

export const getStaticPaths = (() => [
  { params: { nume: 'halo-auriu' }, props: { culoare: '#c29a45', inele: 6 } },
  { params: { nume: 'halo-deschis' }, props: { culoare: '#e7cc86', inele: 7 } },
]) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  new Response(haloSvg(props.culoare as string, props.inele as number), {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' },
  });
