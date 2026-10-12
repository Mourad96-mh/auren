import Img from '@/components/Img';
import SIZES from '../../public/img/sizes.json';

const ratio = (name) => SIZES[name].w / SIZES[name].h;

// Justified rows: every image in a row shares one height, widths follow each render's own ratio (portraits stay uncropped).
export default function ProjectGallery({ project }) {
  return (
    <div className="pj-gallery">
      {project.rows.map((row, r) => {
        const sum = row.reduce((s, i) => s + ratio(project.imgs[i].name), 0);
        return (
          <div key={r} className="pj-row reveal" style={{ '--r': sum.toFixed(3) }}>
            {row.map((i) => {
              const im = project.imgs[i];
              const share = Math.round((ratio(im.name) / sum) * 100);
              return (
                <figure key={im.name} className="media" style={{ '--r': ratio(im.name).toFixed(3) }}>
                  <Img name={im.name} alt={im.alt} sizes={`(max-width: 700px) 100vw, ${share}vw`} />
                </figure>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
